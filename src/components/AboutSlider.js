import { styled } from "@mui/styles";
import SimpleImageSlider from "react-simple-image-slider";
import useWindowDimensions from "./WindowResize";


const images = [
  { url: "https://s1.1zoom.ru/b3844/258/Apricot_Many_Closeup_567751_1920x1080.jpg" },
  { url: "https://img3.akspic.ru/crops/9/2/4/5/5/155429/155429-svezhie_granaty_razrezannye_popolam-3840x2160.jpg" },
  { url: "https://cdnn1.img.armeniasputnik.am/img/2076/11/20761172_0:84:1601:984_1920x0_80_0_0_6c920926921afb2feca86ff56b876e77.jpg" },
  { url: "https://wallpaperaccess.com/full/1585723.jpg" },
  { url: "http://wallpaperstock.net/wine_wallpapers_24578_1920x1080.jpg" },
  { url: "https://cdn.iz.ru/sites/default/files/article-2018-05/1_95.jpg" },
];

const secondImages = [
    {url: 'https://www.peopleofar.com/wp-content/uploads/armenian-lavash.jpg'}
]


export const AboutSlider = () => {
    const {width, height} = useWindowDimensions()
  return (
    <div>
      <SimpleImageSlider
        width={width - 17}
        height={height - 55}
        images={images}
        showBullets
        showNavs
        autoPlay
        style={{backgroundPosition: 'bottom'}}
      />
    </div>
  );
}

export const AboutSliderSecond = () => {
    const {width, height} = useWindowDimensions()
  return (
    <div>
      <SimpleImageSlider
        width={width - 700}
        height={height - 100}
        images={secondImages}
        showBullets
        showNavs
        autoPlay
        style={{backgroundPosition: 'bottom'}}
      />
    </div>
  );
}

