import React from 'react'
import PropTypes from 'prop-types'
import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'
import { Container, Header, ProfilePhoto, User, Name, Inner, Data } from './style'

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <ProfilePhoto src={user.avatar_url} alt='Foto' />
        <User>{user.login}</User>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>
          {user.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.following}&nbsp;<i>seguindo</i>
        </Data>
        { user.company && (
            <Data>
              <MdWork size={20}/>
              {user.company}
            </Data>
          )
        }
        {user.location && (
            <Data>
              <MdLocationCity size={20}/>
              {user.location}
            </Data>
          )
        }
        {user.blog && (
            <Data>
              <MdLink size={20}/>
              <a href={`\\${user.blog}`}>{user.blog}</a>
            </Data>
          )
        }
      </Inner>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile
