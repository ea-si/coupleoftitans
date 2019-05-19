import React from 'react'
import Layout from '../components/index-layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About us" />
    <div className="mv4 mw9 center w-100 pa4 flex-grow-1 tl">
      <h1 className="lh-copy f3 f2-l serif ph2 ph4-l mw6 center">
        “Passion has little to do with euphoria and everything to do with patience. It is not about feeling good. It is about endurance. Like patience, passion comes from the same Latin root: pati. It does not mean to flow with exuberance. It means to suffer.”
      </h1>
      <cite className="mb4 db silver tc"> ― Mark Z. Danielewski, House of Leaves</cite>
      <div className="markdown-body mt6">
        <div className="pa4-l pa0 f4 lh-copy silver mw7 tl center">
          <p className="pa3">
            Welcome, this is a cycling journal of <a href="https://twitter.com/ea_n">Eva</a> & <a href="https://twitter.com/BorisStefanik">Boris</a> powered by{' '}
            <a
              className="link dim black"
              href="https://daringfireball.net/projects/markdown/syntax">
              Markdown
            </a>
            ,{' '}
            <a className="link dim black" href="http://tachyons.io">
              Tachyons
            </a>{' '}&{' '}
            <a className="link dim black" href="https://www.gatsbyjs.org">
              Gatsby</a>.
          </p>
          <p className="pa3">
            We hope the content here inspires you to get out there on your bike.
            The bottom of each entry includes a <code>route.gpx</code> file if
            you wish to relive the ride.
          </p>
          <p className="pa3">
            This project is forked from <a href="https://github.com/aboutjax/goneriding"> Github</a> created by <a href="https://twitter.com/p0pmaker">Jacky Lee</a>. Thank you. 🍻
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
