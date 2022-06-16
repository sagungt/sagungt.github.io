import React, { RefObject, useEffect, useRef, useState } from "react";
import Projects from "./components/pages/Projects";
import DragButton from "./components/DragButton";
import Profile from "./components/pages/Profile";
import Navigation from "./components/Navigation";
import Contact from "./components/pages/Contact";
import Overlay from "./components/Overlay";
import Blog from "./components/pages/Blog";
import Field from "./components/Field";
import styled from "styled-components";
import Page from "./components/Page";

const StyledApp = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

let loop: ReturnType<typeof setTimeout>;
let menuLoop: ReturnType<typeof setTimeout>;
const App = () => {
  const [hash, setHash] = useState(window.location.href);
  const projectsOverlay = useRef<HTMLDivElement | null>(null);
  const profileOverlay = useRef<HTMLDivElement | null>(null);
  const contactOverlay = useRef<HTMLDivElement | null>(null);
  const blogOverlay = useRef<HTMLDivElement | null>(null);
  const dragButton = useRef<HTMLDivElement | null>(null);
  const projects = useRef<HTMLDivElement | null>(null);
  const profile = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);
  const blog = useRef<HTMLDivElement | null>(null);

  function dragElement(
    element: RefObject<HTMLDivElement>,
    position?: string | null
  ) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (position) {
      moveToPosition(position);
    } else {
      element.current!.onmousedown = mouseDown;
      element.current!.ontouchstart = touchStart;
    }

    function moveToPosition(position: string | null) {
      clearTimeout(menuLoop);
      clearTimeout(loop);
      switch (position) {
        case "topleft":
          move(-1, -1);
          // setWindowHash("contact");
          break;
        case "topright":
          move(width + 1, -1);
          // setWindowHash("blog");
          break;
        case "bottomleft":
          move(-1, height + 1);
          // setWindowHash("projects");
          break;
        case "bottomright":
          move(width + 1, height + 1);
          // setWindowHash("profile");
          break;
        case "center":
          move(Math.round(width / 2), Math.round(height / 2));
        // setWindowHash("home");
        default:
          break;
      }
    }

    function touchStart(event: TouchEvent) {
      event.preventDefault();
      const targetTouches = event.targetTouches[0];
      pos3 = Math.round(targetTouches.pageX);
      pos4 = Math.round(targetTouches.pageY);
      element.current!.ontouchend = closeDragElement;
      element.current!.ontouchmove = touchMove;
      // clearTimeout(loop);
    }

    function mouseDown(event: MouseEvent): void {
      event.preventDefault();
      pos3 = Math.round(event.clientX);
      pos4 = Math.round(event.clientY);
      document.onmouseup = closeDragElement;
      document.onmousemove = mouseMove;
      // clearTimeout(loop);
    }

    function touchMove(event: TouchEvent) {
      event.preventDefault();
      const targetTouches = event.targetTouches[0];
      const roundedTargetTouchX = Math.round(targetTouches.pageX);
      const roundedTargetTouchY = Math.round(targetTouches.pageY);
      pos1 = pos3 - roundedTargetTouchX;
      pos2 = pos4 - roundedTargetTouchY;
      pos3 = roundedTargetTouchX;
      pos4 = targetTouches.pageY;
      elementDrag();
    }

    function mouseMove(event: MouseEvent) {
      event.preventDefault();
      const roundedClientX = event.clientX;
      const roundedClientY = event.clientY;
      pos1 = pos3 - roundedClientX;
      pos2 = pos4 - roundedClientY;
      pos3 = roundedClientX;
      pos4 = roundedClientY;
      elementDrag();
    }

    function move(
      x: number,
      y: number,
      additionX: number = 0,
      additionY: number = 0,
      speed: number = 1
    ) {
      const rect = element.current!.getBoundingClientRect();
      const roudedRectX = Math.round(rect.x) + 50;
      const roudedRectY = Math.round(rect.y) + 50;
      if (roudedRectX === x && roudedRectY === y) {
        clearTimeout(menuLoop);
        return;
      }
      if (
        roudedRectX < -101 ||
        roudedRectY < -101 ||
        roudedRectX > width + 101 ||
        roudedRectY > height + 101
      ) {
        clearTimeout(menuLoop);
        return;
      }
      if (x < roudedRectX) {
        additionY = speed;
      }
      if (y < roudedRectY) {
        additionX = speed;
      }
      if (x > roudedRectX) {
        additionY = -speed;
      }
      if (y > roudedRectY) {
        additionX = -speed;
      }

      if (additionX === 0 && additionY === 0) {
        clearTimeout(menuLoop);
        return;
      }
      pos1 = additionY;
      pos2 = additionX;
      pos3 = roudedRectX;
      pos4 = roudedRectY;

      elementDrag();
      menuLoop = setTimeout(() => {
        move(x, y);
      }, 1);
    }

    function elementDrag() {
      const rect = element.current!.getBoundingClientRect();
      const changeX = rect.x + 50;
      const changeY = rect.y + 50;

      element.current!.style.left =
        Math.round(element.current!.offsetLeft) - pos1 + "px";
      element.current!.style.top =
        Math.round(element.current!.offsetTop) - pos2 + "px";
      projects.current!.style.height = changeY + "px";
      profile.current!.style.height = changeY + "px";
      profile.current!.style.width = changeX + "px";
      blog.current!.style.width = changeX + "px";

      projectsOverlay.current!.querySelector("h1")!.style.right =
        (width - changeX) / 2 + "px";
      contactOverlay.current!.querySelector("h1")!.style.right =
        (width - changeX) / 2 + "px";
      contactOverlay.current!.querySelector("h1")!.style.bottom =
        (height - changeY) / 2 + "px";
      blogOverlay.current!.querySelector("h1")!.style.bottom =
        (height - changeY) / 2 + "px";

      if (pos3 > width - width / 3 && pos4 > height - height / 3) {
        setWindowHash("profile");
        toggleOverlay(profileOverlay, false);
        rotateElement(contactOverlay, 90, 50, 50);
        rotateElement(projectsOverlay, 90, 50, 50);
      } else if (pos3 < width / 3 && pos4 > height - height / 3) {
        setWindowHash("projects");
        toggleOverlay(projectsOverlay, false);
        rotateElement(blogOverlay, -90, -50, 50);
        rotateElement(profileOverlay, -90, -50, -50);
      } else if (pos3 > width - width / 3 && pos4 < height / 3) {
        setWindowHash("blog");
        toggleOverlay(blogOverlay, false);
        rotateElement(contactOverlay, 90, 50, 50);
        rotateElement(projectsOverlay, 90, 50, 50);
      } else if (pos3 < width / 3 && pos4 < height / 3) {
        setWindowHash("contact");
        toggleOverlay(contactOverlay, false);
        rotateElement(blogOverlay, -90, -50, 50);
        rotateElement(profileOverlay, -90, -50, -50);
      } else if (pos3 < width / 3) {
        setWindowHash("home");
        toggleOverlay(contactOverlay, true);
        toggleOverlay(projectsOverlay, true);
        rotateElement(blogOverlay, -90, -50, 50);
        rotateElement(profileOverlay, -90, -50, -50);
      } else if (pos3 > width - width / 3) {
        setWindowHash("home");
        toggleOverlay(blogOverlay, true);
        toggleOverlay(profileOverlay, true);
        rotateElement(contactOverlay, 90, 50, 50);
        rotateElement(projectsOverlay, 90, 50, 50);
      } else {
        setWindowHash("home");
        toggleOverlay(blogOverlay, true);
        toggleOverlay(profileOverlay, true);
        toggleOverlay(contactOverlay, true);
        toggleOverlay(projectsOverlay, true);
        rotateElement(blogOverlay, 0, -50, 50);
        rotateElement(contactOverlay, 0, 50, 50);
        rotateElement(projectsOverlay, 0, 50, 50);
        rotateElement(profileOverlay, 0, -50, -50);
      }
    }

    function toggleOverlay(
      element: RefObject<HTMLDivElement>,
      visible: boolean
    ) {
      element.current!.style.visibility = visible ? "visible" : "hidden";
      element.current!.style.opacity = visible ? "1" : "0";
    }

    function rotateElement(
      element: RefObject<HTMLDivElement>,
      deg: number,
      translateX: number,
      translateY: number
    ) {
      element.current!.querySelector(
        "h1"
      )!.style.transform = `translate(${translateX}%, ${translateY}%) rotate(${deg}deg)`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      element.current!.ontouchmove = null;
      element.current!.ontransitionrun = null;
    }
  }

  function setWindowHash(hash: string) {
    window.location.hash = `#${hash}`;
  }

  const pageClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    dragElement(
      dragButton,
      (event.target as HTMLButtonElement).getAttribute("data-position")
    );
  };

  const moveToEdge = (hash: string) => {
    const rect = dragButton.current!.getBoundingClientRect();
    const roudedRectX = Math.round(rect.x) + 50;
    const roudedRectY = Math.round(rect.y) + 50;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const padding = 5;
    loop = setTimeout(() => {
      switch (hash) {
        case "#profile":
          if (roudedRectX < width - padding && roudedRectY < height - padding) {
            dragElement(dragButton, "bottomright");
          }
          break;

        case "#projects":
          if (roudedRectX > padding && roudedRectY < height - padding) {
            dragElement(dragButton, "bottomleft");
          }
          break;

        case "#blog":
          if (roudedRectX < width - padding && roudedRectY > padding) {
            dragElement(dragButton, "topright");
          }
          break;

        case "#contact":
          if (roudedRectX > padding && roudedRectY > padding) {
            dragElement(dragButton, "topleft");
          }
          break;

        default:
          break;
      }
    }, 3000);
  };

  useEffect(() => {
    dragElement(dragButton);
    window.onhashchange = () => {
      const { hash: newHash } = window.location;
      setHash(newHash);
      clearTimeout(loop);
      moveToEdge(newHash);
    };
    return () => {
      window.onhashchange = null;
    };
  }, []);

  return (
    <>
      <StyledApp>
        <DragButton ref={dragButton} />
        <>
          <Field
            width="50vw"
            height="50vh"
            ref={profile}
            isActive={hash === "#profile"}
          >
            <Overlay
              zIndex={8}
              ref={profileOverlay}
              title="Profile"
              position={`top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);`}
              onClickHandler={() => dragElement(dragButton, "bottomright")}
            />
            <Page zIndex={7} color="white">
              <Navigation hash={hash} onClickHandler={pageClickHandler} />
              <Profile />
            </Page>
          </Field>
          <Field
            width="100vw"
            height="50vh"
            ref={projects}
            isActive={hash === "#projects"}
          >
            <Overlay
              zIndex={6}
              ref={projectsOverlay}
              title="Projects"
              position={`bottom: 50%;
                right: 25%;
                transform: translate(50%, 50%);`}
              onClickHandler={() => dragElement(dragButton, "bottomleft")}
            />
            <Page zIndex={5} color="white">
              <Navigation hash={hash} onClickHandler={pageClickHandler} />
              <Projects />
            </Page>
          </Field>
          <Field
            width="50vw"
            height="100vh"
            ref={blog}
            isActive={hash === "#blog"}
          >
            <Overlay
              zIndex={4}
              ref={blogOverlay}
              title="Blog"
              position={`bottom: 25%;
                left: 50%;
                transform: translate(-50%, 50%);`}
              onClickHandler={() => dragElement(dragButton, "topright")}
            />
            <Page zIndex={3} color="white">
              <Navigation hash={hash} onClickHandler={pageClickHandler} />
              <Blog />
            </Page>
          </Field>
          <Field
            width="100vw"
            height="100vh"
            ref={contact}
            isActive={hash === "#contact"}
          >
            <Overlay
              zIndex={2}
              ref={contactOverlay}
              title="Contact"
              position={`bottom: 25%;
                right: 25%;
                transform: translate(50%, 50%);`}
              onClickHandler={() => dragElement(dragButton, "topleft")}
            />
            <Page zIndex={1} color="white">
              <Navigation hash={hash} onClickHandler={pageClickHandler} />
              <Contact />
            </Page>
          </Field>
        </>
      </StyledApp>
    </>
  );
};

export default App;
