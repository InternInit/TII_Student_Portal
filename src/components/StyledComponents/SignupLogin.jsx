import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  width: 400px;
  height: auto;
  padding-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding-bottom: 24px;
`;

export const Background = styled.div`
  background: radial-gradient(
      109.93% 109.93% at 50% 50%,
      #40a9ff 0%,
      #0f4c75 79.69%,
      #1b262c 100%
    ),
    #ffffff;

  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;
  background-position: center;
  background-size: fill;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding-bottom: 8px;
  margin-top: -8px;
`;

export const Banner = styled.div`
  background-color: #3282b8;
  padding: 18px;
  font-size: 32px;
  font-family: lato;
  font-weight: bold;
  color: white;
  font-weight: normal;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
