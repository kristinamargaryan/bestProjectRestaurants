import React from "react";
import styled from "@emotion/styled";
import { AboutSlider, AboutSliderSecond } from "../AboutSlider";
import { useNavigate } from "react-router-dom";
import {QuiltedImageList} from "../AboutImgList";
import {CustomImageList, CustomImageListSecond} from "../AboutImgSecondList";






const AboutContainer = styled.div`
  width: 100%;
  height: auto;
`;

const RestInfo = styled.div`
  width: calc(100% - 10px);
  text-align: center;
  display: flex;
  justify-content: center;
  
`;
const RestInfoBottom = styled.div`
  width: calc(100% - 10px);
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 970px){
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
  
`;


const ImgStyle = styled.img`
  width: 600px;
  height: 400px;

  @media screen and (max-width: 1131px) {
    width: 600px;
    height: 500px;
  }
  @media screen and (max-width: 1051px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 1000px) {
    width: width;
    height: 500px;
  }

  @media screen and (max-width: 900px) {
    width: 700px;
    height: 500px;
  }
  @media screen and (max-width: 760px) {
    width: 600px;
    height: 400px;
  }
  @media screen and (max-width: 650px) {
    width: 500px;
    height: 300px;
  }
  @media screen and (max-width: 550px) {
    width: 400px;
    height: 300px;
  }
`;

const InfoPart = styled.div`
  display: flex;
  padding: 40px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const HInfo = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Titillium Web';
  font-style: verdana;
  font-size: 21px;
  margin-bottom: 3px;

  @media screen and (max-width: 1820px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1600px) {
    font-size: 19px;
  }
  @media screen and (max-width: 1420px) {
    font-size: 17px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 16.5px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 15.5px;
  }
  @media screen and (max-width: 1130px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1020px) {
    font-size: 13px;
  }
  @media screen and (max-width: 988px) {
    font-size: 12.5px;
  }
  @media screen and (max-width: 970px) {
    font-size: 15px;
  }
`;

const OutlineDiv = styled.div`
  width: calc(100%-1px);
  border: 1px solid #000;
  margin: 10px 0;
`;

const SecondSlide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  @media screen and (max-width: 1600px) {
    display: none;
  }
`

const FooterImagesList = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }

`

export default function About({ currentUser }) {
  
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <AboutContainer>
      <div>
        <div>
          <AboutSlider />
        </div>
        <RestInfo>
          <div>
            <h1 style={{ fontSize: "40px" }}>Welcome to Rest.am!</h1>
            <p style={{ fontSize: "22px" }}>
              This project is designed for people who want to spend their
              vacation in a pleasant, comfortable place. By using this site you
              will not only save your time but also find a place that will live
              up to all your expectations. On the site you can find national
              cuisines of different countries և discover all their secrets. You
              can see more details on the{" "}
              <span
                onClick={goHome}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                main page...
              </span>
            </p>
          </div>
        </RestInfo>
        <OutlineDiv></OutlineDiv>
        <InfoPart>
          <div style={{ marginRight: "10px" }}>
            <HInfo>
              Armenian cuisine includes the foods and cooking techniques of the
              Armenian people and traditional Armenian foods and dishes. The
              cuisine reflects the history and geography where Armenians have
              lived as well as sharing outside influences from European and
              Levantine cuisines. The cuisine also reflects the traditional
              crops and animals grown and raised in Armenian-populated areas.
            </HInfo>
            <OutlineDiv></OutlineDiv>
            <HInfo>
              The preparation of meat, fish, and vegetable dishes in an Armenian
              kitchen often requires stuffing, frothing, and puréeing. Lamb,
              eggplant, and bread (lavash) are basic features of Armenian
              cuisine. Armenians traditionally prefer cracked wheat (bulgur) to
              maize and rice. The flavor of the food often relies on the quality
              and freshness of the ingredients rather than on excessive use of
              spices.
            </HInfo>
            <OutlineDiv></OutlineDiv>
            <HInfo>
              Fresh and dried fruit are used both as main ingredients and as
              sour agents. As main ingredients, the following fruits are used:
              apricots (fresh and dried), quince, melons, and others. As sour
              agents, the following fruits are used: sumac berries (in dried,
              powdered form), sour grapes, plums (either sour or dried),
              pomegranate, apricots, cherries (especially sour cherries), and
              lemons. In addition to grape leaves, cabbage leaves, chard, beet
              leaves, radish leaves, strawberry leaves, and others are also
              stuffed.
            </HInfo>
          </div>
          <div>
            <ImgStyle
              src="https://www.peopleofar.com/wp-content/uploads/armenian-lavash.jpg"
              alt="img"
            />
          </div>
        </InfoPart>
        <RestInfoBottom>
          <div>
            <QuiltedImageList />
          </div>
          <div style={{padding: '20px'}}>
            <HInfo>
              Grains used in traditional Armenian cuisine included millet,
              wheat, barley, rye, peas and maize. Various legumes were also
              consumed such as lentils, chickpeas, and beans. Grains are used
              for a variety of purposes: traditional lavash bread is made from
              wheat flour and grains are also added to soups to give them a
              thicker consistency. 
            </HInfo>
            <OutlineDiv></OutlineDiv>
            <HInfo>
              Lavash is baked in a traditional clay tonir
              oven. Bread is a very important staple of Armenian cuisine. Kofta
              can be made with bulgur, finely chopped vegetables, herbs and
              often lamb. There are variations intended to be eaten cold or
              served hot. 
            </HInfo>
            <OutlineDiv></OutlineDiv>
            <HInfo>
              Sini keufteh is a dish similar to kibbeh, but layered
              and baked in a baking dish. The two outer layers are made with
              bulgur, lamb mince, onion and spices. The inner filling includes
              butter, onion, lamb mince, pine nuts and spices. Harissa is a
              porridge made of wheat and meat cooked together for a long time,
              originally in the tonir but nowadays over a stove. Ardashes Hagop
              Keoleian called it the "national dish" of Armenians.
            </HInfo>
            <OutlineDiv></OutlineDiv>
            <HInfo>
              Traditionally, harissa was prepared on feast days in communal
              pots. The wheat used in harissa is typically shelled (pelted)
              wheat, though in Adana, harissa is made with կորկոտ (korkot;
              ground, par-boiled shelled wheat). Harissa can be made with lamb,
              beef, or chicken. A common dish of Armenian cuisine is pilaf
              (եղինձ; yeghints). Pilaf is a seasoned rice, bulgur, or shelled
              wheat dish often served with meats such as lamb or beef. 
              </HInfo>
              <OutlineDiv></OutlineDiv>
              <HInfo>
              Armenian recipes may combine vermicelli or orzo with rice cooked in stock
              seasoned with mint, parsley and allspice. One traditional
              Armenian pilaf is made with the same noodle rice mixture cooked in
              stock with raisins, almonds and allspice. Armenian rices are
              discussed by Rose Baboian in her cookbook from 1964 which includes
              recipes for different pilafs, most rooted in her birthplace of
              Aintab in Turkey. Baboian recommends that the noodles be
              stir-fried first in chicken fat before being added to the pilaf.
              </HInfo>
              <OutlineDiv></OutlineDiv>
              <HInfo>
              Another Armenian cookbook written by Vağinag Pürad recommends to
              render poultry fat in the oven with red pepper until the fat
              mixture turns a red color before using the strained fat to prepare
              pilaf. Pilaf made with bulgur and liver is a specialty of Zeytun
              (present day Süleymanlı). Lapa is an Armenian word with
              several meanings, one of which is "watery boiled rice, thick rice
              soup, mush" and lepe which refers to various rice dishes differing
              by region. Antranig Azhderian describes Armenian pilaf as
              "dish resembling porridge". 
              </HInfo>
              <OutlineDiv></OutlineDiv>
              <HInfo>
              In Agn (present day Kemaliye) a
              thin flatbread calling loshig was baked and dried. It would be
              wetted again before being eaten. Badjoug was a pastry of fat and
              flour stamped with designs and sent as a wedding invitation. Glodj
              was unleavened bread made for Lent and klrdig was a bread made of
              semolina.
            </HInfo>
          </div>
        </RestInfoBottom>
        <FooterImagesList>
        <CustomImageList />
        <CustomImageListSecond  />
          </FooterImagesList>
          <div style={{fontSize: '30px', padding: '15px', marginTop: '20px', textAlign: 'center', marginBottom: '20px'}}>In Armenia you will find everything you want ... So pack your bags and come to Armenia, we are waiting for you</div>
      </div>
    </AboutContainer>
  );
}
