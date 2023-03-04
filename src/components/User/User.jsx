// import { useState } from "react";
import { Avatar, AvatarWrapper, FollowButton, Line, Logo, Picture, Text, ContentWrapper, UserWrapper } from "./User.styled";

const User = ({ user, onClickButton }) => {
  const { tweets, followers, avatar, follow } = user;

  const normalizeFollowers = new Intl.NumberFormat("en-US").format(followers);

  return (
    <UserWrapper>
      <Logo />
      <Picture />
      <Line />
      <Avatar userImg={avatar} />
      <AvatarWrapper />
      <ContentWrapper>
        <Text>
          {tweets}&nbsp;TWEETS
        </Text>
        <Text>
          {normalizeFollowers}&nbsp;FOLLOWERS
        </Text>
      <FollowButton type="button" following={follow} onClick={onClickButton} >
        {follow ? 'FOLLOWING' : 'FOLLOW'}</FollowButton>
      </ContentWrapper>
    </UserWrapper>
  )
};

export default User;