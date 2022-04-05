import Link from 'next/link';
import React from 'react';
import { BiMap } from 'react-icons/bi';
import ImageSlider from '../ImageSlider';
import { Panel, Row, Avatar, Column, LikeIcon, CommentIcon } from './styles';

const FeedPost: React.FC = () => {
  const SliderData = [
    {
      image:
        'https://images.pexels.com/photos/2459/stairs-home-loft-lifestyle.jpg?cs=srgb&dl=pexels-life-of-pix-2459.jpg&fm=jpg',
    },
    {
      image:
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?cs=srgb&dl=pexels-skitterphoto-584399.jpg&fm=jpg',
    },
    {
      image:
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?cs=srgb&dl=pexels-skitterphoto-584399.jpg&fm=jpg',
    },
    {
      image:
        'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-2082087.jpg&fm=jpg',
    },
    {
      image:
        'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <Panel>
      <Row className='heading'>
        <Avatar src='https://i.imgur.com/81RtXfT.jpg' alt='Rocketseat' />
        <Column>
          <h3>EDRELU Comércio Geral, LDA</h3>
          <h4>Imobilhária</h4>
        </Column>
      </Row>

      <Row className='slide-row'>
        <ImageSlider slides={SliderData} />
      </Row>

      <Row className='desc'>
        <div className='description'>
          <h2 className='post-title'>Apartamento</h2>
          <p className='post-body'>
            Using these 7 proven tips from experts in the industry, you can save
            time, money and more!
          </p>
        </div>

        <div className='location'>
          <h3>Localização</h3>
          <p>Kilamba, Luanda. Nº 321</p>
        </div>

        <div className='post-footer'>
          <Link href='/map-page'>
            <a>
              <BiMap size={25} />
              Ver no mapa
            </a>
          </Link>

          <button className='coment'>
            <CommentIcon />
            <span>Mostrar interesse</span>
          </button>
        </div>
      </Row>
    </Panel>
  );
};

export default FeedPost;
