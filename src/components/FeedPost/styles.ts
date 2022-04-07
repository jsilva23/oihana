import styled, { css } from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { RiMessage2Line } from 'react-icons/ri';

export const Panel = styled.div`
  background: #e5edf3;
  overflow: hidden;
  margin-top: 16px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  &.heading {
    padding: 20px;
    h3 {
      font-size: 14px;
      color: #041c32;
    }
    h4 {
      font-size: 12px;
      font-weight: normal;
    }
  }

  &.slide-row {
    padding: 10px 45px;
  }

  &.desc {
    flex-direction: column;
    align-items: start;

    position: relative;
    padding: 20px;

    .description {
      margin-bottom: 15px;
      h2 {
        font-size: 2.5rem;
        color: #041c32;
        margin-bottom: 4px;
      }

      p {
        font-size: 1.5rem;
        line-height: 1.5;
        color: #041c32;
      }
    }

    .location {
      h3 {
        font-size: 1.5rem;
        color: #041c32;
      }

      p {
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 10px;
      }
    }
  }

  .post-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      font-size: 18px;
      line-height: 1.5;
      text-decoration: none;

      display: flex;
      align-items: center;
      color: #064663;
    }

    button {
      display: flex;
      align-items: center;
      background: #064663;
      color: #f4faff;
      font-size: 1.4rem;
      padding: 10px;
      border-radius: 5px;
      border: 0;
      font-weight: 600;
      box-shadow: none;
      transition: background 0.2s ease;

      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    width: 100%;
    height: 350px;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .right-arrow {
    position: absolute;
    top: 45%;
    right: 10px;
    font-size: 3rem;
    color: #e5edf3;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {
    position: absolute;
    top: 45%;
    left: 10px;
    font-size: 3rem;
    color: #e5edf3;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .slide {
    display: none;
    transition-duration: 1s ease;
  }

  .slide.active {
    display: block;
    width: 100%;
    height: 100%;

    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const Column = styled.div`
  margin: 0 10px;
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const LikeIcon = styled(AiOutlineLike)`
  ${iconCSS}
`;

export const CommentIcon = styled(RiMessage2Line)`
  ${iconCSS}
`;
