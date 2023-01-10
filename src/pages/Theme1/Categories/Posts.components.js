import styled from "styled-components";

export const PostHeaderSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  margin-top: 30px;
`;

export const PostHeaderInfluencerDp = styled.img`
  width: 36px;
  height: 36px;
`;

export const PostHeaderInfluencerName = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #d9d6cb;
`;

export const PostHeaderInfluencerPostedHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;

export const CarouselContainer = styled.div`
  width: 90%;
  margin-top: 20.5px;
`;

export const PostsContentImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ImpressionsContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
  }
`;

export const LikesHeader = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #c0c0c0;
`;

export const PostDescriptionSection = styled.div`
  margin-top: 10px;
  width: 90%;

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #8c8888;
  }

  & span {
    font-weight: bolder;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 0;
  border: 1px solid #a3a3a3;
  margin-left: -25px;
  opacity: 0.5;
`;
