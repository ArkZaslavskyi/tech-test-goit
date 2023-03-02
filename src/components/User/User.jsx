import { useState } from "react";
import { Avatar, AvatarWrapper, FollowButton, Line, Logo, Picture, Text, ContentWrapper, UserWrapper } from "./User.styled";

const User = ({ logo, picture, border, user }) => {
  console.log(user);
  const [follow, setFollow] = useState(false);

  const handleClick = () => {
    setFollow(!follow);
  }

  const { tweets, followers } = user;
  return (
    <>
      <UserWrapper>
        <Logo logoImg={logo}  />
        <Picture picture={picture} />
        <Line />
        <Avatar userImg={user.avatar} />
        <AvatarWrapper border={border} />
        <ContentWrapper>
          <Text>
            {tweets}&nbsp;TWEETS
          </Text>
          <Text>
            100,500&nbsp;FOLLOWERS
          </Text>
        <FollowButton type="button" following={follow} onClick={handleClick} >
          {follow ? 'FOLLOWING' : 'FOLLOW'}</FollowButton>
        </ContentWrapper>
      </UserWrapper>
    </>
  )
};

export default User;