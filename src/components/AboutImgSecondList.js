import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useWindowDimensions from './WindowResize';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export  function CustomImageList() {
    const {width, height} = useWindowDimensions()
  return (
    <ImageList
    style={{overflow: 'hidden'}}
      sx={{
        width: width <= 1000 ?  width-20 : width / 2 - 30,
        transform: 'translateZ(0)',
      }}
      rowHeight={350}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem  key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            {/* <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            /> */}
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
export  function CustomImageListSecond() {
    const {width, height} = useWindowDimensions()
    return (
      <ImageList
      style={{overflow: 'hidden'}}
        sx={{
          width: width <= 1000 ?  width-20 : width / 2,
          transform: 'translateZ(0)',
        }}
        rowHeight={350}
        gap={1}
      >
        {itemDataSecond.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
  
          return (
            <ImageListItem  key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              {/* <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              /> */}
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }

const itemData = [
  {
    img: 'https://foodfuntravel.com/wp-content/uploads/2018/08/Dolma-Cabbage-1.jpg',
    featured: true,
  },
  { img: 'https://foodyoushouldtry.com/wp-content/uploads/2017/06/1.-Shampours-1024x768.jpg',
  },
  {
    img: 'https://th-thumbnailer.cdn-si-edu.com/SX6vXdZVxNPdwtB-c26ms-pUfIg=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/60/8c/608c52fa-3558-45da-a978-e908121a81c4/istock-177802386.jpg',
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/36/12/a6/grilled-salmon-fillet.jpg',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/turkish-paper-kebab-kagit-kebabi-antakya-kebap-198574425.jpg',
  },
  {
    img: 'https://www.lacademie.com/wp-content/uploads/2022/02/armenian-foods.jpg',
    featured: true,
  },
  {
    img: 'https://www.gamintraveler.com/wp-content/uploads/2021/10/Spas.jpg',
  },
  {
    img: 'https://s2.dmcdn.net/v/E-_Tx1N5iTLdFHvv3/x1080',
  },
  {
    img: 'https://www.advantour.com/img/armenia/dishes/bozbash.jpg',
  },
  {
    img: 'https://nomadparadise.com/wp-content/uploads/2019/12/aremianfood24-1024x640.jpg',
  },
  {
    img: 'https://www.gastronom.ru/binfiles/images/20160919/bbc724c0.jpg',
  },
  {
    img: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/11/shutterstock_651864400-650x387.jpg',
  },
];

const itemDataSecond = [
    {
      img: 'https://www.lacademie.com/wp-content/uploads/2022/02/armenian-stuffed-flatbread.jpg',
      featured: true,
    },
    {
      img: 'https://qph.cf2.quoracdn.net/main-qimg-57fa0f06a813d54c8f174073ed4f8a09-lq',
    },
    {
      img: 'https://www.willflyforfood.net/wp-content/uploads/2021/06/balkan-food-dolma.jpg.webp',
    },
    {
      img: 'https://www.simplyleb.com/wp-content/uploads/Hareesa-Soup-8.jpg',
    },
    {
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/b8/88/c1/wohoho-givi-2-me-special.jpg',
    },
    {
      img: 'https://i.pinimg.com/originals/52/68/2e/52682ea1ef8275d6ded4fb91dec594af.png',
      featured: true,
    },
    {
      img: 'https://lh3.googleusercontent.com/p/AF1QipP66_C098I2GK5cllRuO7QEPHP6MaLl4AWqnK9Q=s1600-w400',
    },
    {
      img: 'https://wildarmenia.com/wp-content/uploads/2017/12/armenian-cuisine-dishes-e1517755517557.jpg',
    },
    {
      img: 'https://s1.eda.ru/StaticContent/Photos/120131082509/150830163929/p_O.jpg',
    },
    {
      img: 'https://i.ytimg.com/vi/CuFiJS6dCiU/maxresdefault.jpg',
    },
    {
      img: 'https://i.ytimg.com/vi/lAGFWRgZU8k/maxresdefault.jpg',
    },
    {
      img: 'https://bosskitchen.com/wp-content/uploads/2021/04/armenian-cauliflower-salad-218077.jpg',
    },
  ];