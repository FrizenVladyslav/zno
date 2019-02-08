import React, { Component } from 'react'

import { Parallax } from 'react-parallax'
import { Icon, Container, Grid } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import NavMenu from './NavMenu'
import DescriptionRow from './DescriptionRow'

import headerBg from 'assets/images/hand-pen.jpg'
import notePhone from 'assets/images/note-phone.jpg'
import students from 'assets/images/students-group.jpg'

class Home extends Component {
  render() {
    return (
      <>
        <header className={css(styles.header)}>
          <NavMenu />
          <Parallax bgImage={headerBg} strength={500} blur={0}>
            <div className="header-content">
              <h1>Склади ЗНО краще за всіх</h1>
            </div>
          </Parallax>
          <Icon name="arrow down" className="arrow-bottom" />
        </header>
        <main className={css(styles.main)}>
          <Container>
            <Grid>
              <DescriptionRow
                img={notePhone}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non."
              />
              <DescriptionRow
                img={students}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non."
                invert
              />
            </Grid>
          </Container>
        </main>
      </>
    )
  }
}

export default Home
