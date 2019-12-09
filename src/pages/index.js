import React from "react"
import SEO from "../components/seo"
import { Link as InternalLink } from "gatsby"
import { A, Img } from "../components/ui"

export default function IndexPage() {
  return (
    <>
      <SEO />

      <div className="mb-12 leading-normal md:text-xl">
        <section className="relative text-xl font-light md:font-light md:text-3xl md:pt-8 md:pb-4">
          <div className="absolute right-0 pt-3">
            <Img
              className="w-24 h-24 rounded-full md:w-40 md:h-40"
              src="profile.jpeg"
              aspectRatio={1}
            />
          </div>
          <p>
            Hi there!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </p>

          <p className="mt-4">
            I'm{" "}
            <A href="https://twitter.com/samselikoff" font="normal">
              @samselikoff
            </A>
            , and <br /> since 2016 I've made a<br /> living teaching JavaScript
            <br /> UI development on the web.
          </p>
        </section>

        <Section>
          <SectionTitle>
            <InternalLink to="/projects" className="inline-block">
              Projects
              <Chevron className="w-4 h-4" />
            </InternalLink>
          </SectionTitle>
          <p className="mt-2">
            I'm currently working on{" "}
            <A href="https://miragejs.com/">Mirage JS</A>, an API mocking
            library that lets frontend developers build complete features
            without touching their backends.{" "}
          </p>
          <p className="mt-4">
            I also run <A href="https://embermap.com/">embermap.com</A> where I
            make videos about design, development and testing using Ember.js,
            along with my friend{" "}
            <A href="https://twitter.com/ryantotweets">Ryan Toronto</A>.
          </p>
        </Section>

        <Section>
          <SectionTitle>
            <InternalLink to="/podcast" className="inline-block">
              Podcast
              <Chevron className="w-4 h-4" />
            </InternalLink>
          </SectionTitle>
          <p className="mt-2">
            Join me, Ryan + guests on a weekly podcast where we chat about all
            things JavaScript UI development – not just Ember!
          </p>
          <p className="mt-4">
            <A href="https://embermap.com/podcast">
              → Check out The EmberMap podcast
            </A>
          </p>
        </Section>

        <Section>
          <SectionTitle>
            <InternalLink to="/talks" className="inline-block">
              Talks & Interviews
              <Chevron className="w-4 h-4" />
            </InternalLink>
          </SectionTitle>
          <p className="mt-2">
            I've given several conference talks and talked about my open source
            work on a few podcasts. <A to="/talks">Check them out here.</A>
          </p>
        </Section>

        <Section>
          <SectionTitle>
            <InternalLink to="/blog" className="inline-block">
              Blog
              <Chevron className="w-4 h-4" />
            </InternalLink>
          </SectionTitle>
          <p className="mt-2">
            You can find my writing on <A to="/blog">my blog</A>. I haven't been
            writing much lately but I'm planning on starting up again.
          </p>
        </Section>

        <Section>
          <SectionTitle>Life</SectionTitle>
          <p className="mt-2">
            I was born in upstate New York, lived in Florida for 15 years, and
            have since made my way back to the Northeast.
          </p>
          <p className="mt-4">
            I currently live in New York City + absolutely love it here!
          </p>

          <div className="mt-8 -mx-6 md:-mx-escape-xl md:w-screen">
            <ImageCard
              src="new-york.jpeg"
              title="New York City"
              date="2015–Present"
            />
            <div className="flex">
              <ImageCard
                src="burlington.jpeg"
                title="Burlington"
                date="2014–2015"
                className="w-1/2"
                aspectRatio={1}
              />
              <ImageCard
                src="boston.jpg"
                title="Boston"
                date="2010–2014"
                className="w-1/2"
                aspectRatio={1}
              />
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

function Section({ children }) {
  return <section className="mt-10 md:mt-16">{children}</section>
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
      {children}
    </h2>
  )
}

function Chevron(props) {
  return (
    <svg
      className={`inline fill-current ${props.className}`}
      viewBox="0 0 20 20"
    >
      <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
          ></polygon>
        </g>
      </g>
    </svg>
  )
}

function ImageCard({ src, title, date, className, aspectRatio = 16 / 9 }) {
  return (
    <div className={`relative ${className}`}>
      <Img src={src} aspectRatio={aspectRatio} />
      <div
        className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <p className="text-sm font-semibold md:text-xl">{title}</p>
        <p className="text-xs md:text-lg">{date}</p>
      </div>
    </div>
  )
}
