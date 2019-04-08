import React, { Component } from 'react'
// @ts-ignore
import { Parallax } from 'react-parallax'
import { Icon, Container, Grid } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'
import history from 'utils/history'
import NavMenu from './NavMenu'
import DescriptionBlock from './DescriptionBlock'

import styles from './styles'

import headerBg from 'assets/images/hand-pen.jpg'
import notePhone from 'assets/images/note-phone.jpg'
import students from 'assets/images/students-group.jpg'

class Home extends Component {
  mainRef = React.createRef()

  handleScrollToContent = () => {
    this.mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <>
        <header className={css(styles.header)}>
          <NavMenu />
          <Parallax bgImage={headerBg} strength={-200} blur={0}>
            <div className="header-content">
              <h1>Склади ЗНО краще за всіх</h1>
            </div>
          </Parallax>
          <Icon
            name="arrow down"
            className="arrow-bottom"
            onClick={this.handleScrollToContent}
          />
        </header>
        <main className={css(styles.main)} ref={this.mainRef}>
          <Container>
            <Grid>
              <DescriptionBlock
                img={notePhone}
                onClick={() => history.push('/lessons')}
                text="Друже, щоб вдало скласти іспит, вибери предмет і прямуй до своєї мети!"
              />
              <DescriptionBlock
                img={students}
                invert
                onClick={() => history.push('/login')}
                text="Навчання - це легко і зручно.
                Будь попереду всіх, займайся з нами"
              />
            </Grid>
          </Container>
        </main>
      </>
    )
  }
}

export default Home
