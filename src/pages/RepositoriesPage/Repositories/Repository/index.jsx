import React from 'react'
import PropTypes from 'prop-types'
import { Container, Name, Description, Footer, Lang, Link } from './style'
import { langColors } from '../../../../services/config'

function Repository({ repo }) {

  const color = langColors[repo.language && repo.language.toLowerCase()]

  return (
    <Container color={color}>
      <Name>{repo.name}</Name>
      <Description>{repo.description}</Description>
      <Footer color={color}>
        <Lang>{repo.language}</Lang>
        <Link href={repo.html_url} target='_blank'>VER</Link>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository
