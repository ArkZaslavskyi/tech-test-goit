import styled from "styled-components";

export const UserWrapper = styled.li`
  position: relative;
  width: var(--user-box-width);
  height: var(--user-box-height);
  background: var(--user-box-background);
  box-shadow: var(--user-box-shadow);
  border-radius: var(--user-box-border-radius);
`;

export const Logo = styled.div`
  position: absolute;
  /* display: block; */
  width: 76px;
  height: 22px;
  top: 20px;
  left: 20px;
  border: none;
  outline: none;
  opacity: 0.3;
  background: var(--avatar-logo);
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
`;

export const Picture = styled.div`
  position: absolute;
  /* display: block; */
  width: 308px;
  height: 168px;
  top: 28px;
  left: 50%;
  transform: translate(-50%, 0);
  border: none;
  outline: none;
  background: var(--avatar-picture);
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: var(--center-line-height);
  top: var(--top-section);
  transform: translate(0, -50%);
  background-color: var(--color-white);
  box-shadow: var(--center-line-shadow);
`;

export const Avatar = styled.div`
  position: absolute;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  /* box-shadow: var(--center-circle-shadow); */
  top: var(--top-section);
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${({ userImg }) => userImg});
  background-color: var(--color-violet);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: var(--center-circle-size);
  height: var(--center-circle-size);
  border-radius: 50%;
  box-shadow: var(--center-circle-shadow);
  top: var(--top-section);
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: var(--avatar-border);
`;
export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
`;

export const Text = styled.p`
  color: var(--color-white);
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;

  :not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 26px auto 0;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  background: ${({ following }) =>
    following ? `var(--color-green)` : `var(--color-white)`};
  box-shadow: var(--button-shadow);
  border-radius: var(--button-border-raidus);
  border: none;
  font-size: 18px;
  line-height: 1.2;
  color: var(--color-black);
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
/**
  --button-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);


* 
 */
