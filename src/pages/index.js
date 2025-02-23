import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import IndexLayout from '../components/index-layout'
import SEO from '../components/seo'
import FeatureCard from '../components/feature-card'

const IndexPage = ({ data }) => {
  let featurePost = data.featurePost.edges[0]
  let featurePostCoverImageSrc =
    featurePost.node.frontmatter.cover_image.childImageSharp.sizes.src
  let featurePostCoverFixedImageSrc =
    featurePost.node.frontmatter.cover_image.childImageSharp.fixed.src

  let otherPosts = data.allPosts.edges.slice(0, 8)

  // Truncate post excerpt function
  let excerptTruncate = (str, number_of_words) => {
    return (
      str
        .split(' ')
        .splice(0, number_of_words)
        .join(' ') + '...'
    )
  }

  return (
    <IndexLayout>
      <SEO
        title="Two titanium bikes, no clue"
        keywords={[
          `bike packing`,
          `journal`,
          `bike touring`,
          `adventure cyling`,
          `world travel`,
          `cycling`,
        ]}
        image={featurePostCoverFixedImageSrc}
      />
      <div className="mw9 center w-100 mb4 flex-grow-1">
        <div className="cf ph0 ph3-l">
          <div className="fl w-100 w-50-l pa3-l feature-ride-container">
            <FeatureCard
              slug={featurePost.node.fields.slug}
              imageSrc={featurePostCoverImageSrc}
              title={featurePost.node.frontmatter.title}
              excerpt={excerptTruncate(
                featurePost.node.frontmatter.excerpt,
                24
              )}
              date={featurePost.node.frontmatter.date}
            />
          </div>
          <div className="fl w-100 flex flex-wrap w-50-l pa3 pa0-l">
            {otherPosts.map(({ node }) => (
              <div key={node.id} className="fl w-100 w-50-ns pa3">
                <div>
                  <Link to={node.fields.slug} className="link black db">
                    <Img
                      fluid={node.frontmatter.cover_image.childImageSharp.fluid}
                      backgroundColor="#d7d7d7"
                      className="dim black br3"
                    />
                  </Link>
                  <h3 className="near-black lh-title mb2">
                    <Link
                      to={node.fields.slug}
                      className="link dim black serif"
                    >
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="silver i f6 mb3 mt0 lh-solid">
                    {node.frontmatter.date}
                  </p>
                  <p className="fw3 gray lh-copy mt0">
                    {excerptTruncate(node.frontmatter.excerpt, 40)}
                  </p>
                </div>
              </div>
            ))}
            <div className="pa3 w-100">
              <Link
                className="link dim db br2 mb0 ph3 pv3 tc b center white bg-black ttu"
                to="/rides"
              >
                View all rides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allPosts: allMarkdownRemark(
      filter: { frontmatter: { publish: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            strava_id
            excerpt
            title
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 500, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    featurePost: allMarkdownRemark(
      filter: {
        frontmatter: { title: { eq: "Volume 2019" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            strava_id
            excerpt
            title
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              childImageSharp {
                sizes(maxWidth: 1400) {
                  ...GatsbyImageSharpSizes
                }
                fixed(width: 1200, height: 630, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
