import "./HomePage.css";
import mainImage from './HomePage1.jpg'
import decorationImage from './Cotton2.png'

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageTextContainer">
        <h1>Back to</h1>
        <h1>Body</h1>
        <h2>школа Татьяны Пилецкой</h2>
      </div>
      <img className="homePageMainImage" src={mainImage} alt='Back to Body studio' />
      <img className="homePageDecorationImage" src={decorationImage} alt='Cotton flowers' />
    </div>
  );
};

export default HomePage;
