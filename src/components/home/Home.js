import React, { useEffect } from "react";
import Header from "../header/Header";
import "./Home.css";
import me from "../../assets/img/me.jpg";
import icon from "../../assets/img/icons/home-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_night_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_night_mobile.jpg";

const Home = () => {
  const myBirthDate = new Date(1996, 5, 4); // Month needs to be -1
  const diff = Date.now() - myBirthDate.getTime();
  const diffAsDate = new Date(diff);
  const myAge = Math.abs(diffAsDate.getUTCFullYear() - 1970);

  // Get window width
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Set header background
  const background = width > 1000 ? backgroundPc : backgroundMobile;

  // useEffect hook that fires when component has mounted
  useEffect(() => {
    document.title = "Home | TechThomas";
  })

  return (
    <React.Fragment>
      <Header title="Home" icon={icon} background={background} />
      <div className="container home">
        <h1>Welcome to TechThomas</h1>
        <div className="info">
          <div className="text">
            <p>
              Hello, my name is Thomas and this website is a way of giving you
              an idea of who I am, what I do and what I have accomplished. Go
              ahead and take a look around. I hope to catch your interest but
              anyways thanks for swinging by!
            </p>
            <p>
              So who am I? I'm a {myAge} year old full-stack web developer who
              lives in Næstved, Denmark. In my free time I love to be with
              friends and family, walk my dogs, play video games and code.
            </p>
            <p>
              As a person I'm a very calm and ambitious guy who always gives his
              best.
            </p>
          </div>
          <div className="img">
            <img src={me} alt="Me" className="me" loading="lazy" width="556px" height="646px" />
            <p>And here I am</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
