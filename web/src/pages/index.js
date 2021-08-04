import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// import Icon from "../assets/images/Download.png";
import SocialMedia from "../components/SocialMedia";
import Skill from "../components/Skill";
import DescriptionBox from "../components/DescriptionBox";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query HomePageQuery {
    page: sanityHome {
      id
      title
      mainImage {
        ...SanityImage
        alt
      }
      description
      footer
      buttonLabel
      downloadLabel
      jobs {
        id
        description
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  console.log(data);
  const { title, description, footer, downloadLabel, mainImage, jobs } = page;

  return (
    <Layout>
      <div className="w-full flex align-middle justify-center pt-20">
        {/* <pre className="border border-primary text-white">
          {JSON.stringify(jobs)}
        </pre> */}
        <div className="w-full md:w-4/6  flex align-middle justify-center flex-wrap gap-x-4 gap-y-4 ">
          {jobs.map((job) => (
            <Skill key={job.id} label={job.description}></Skill>
          ))}
          {/* <Skill label="Senior Front End Developer"></Skill>
          <Skill label="Senior JS Developer"></Skill> */}
          {/* <Skill label="Senior Fullstack Developer"></Skill>
          <Skill label="Front End Developer Architect"></Skill>
          <Skill label="Technical Lead"></Skill> */}
        </div>
      </div>
      <div className="w-full flex align-middle justify-center">
        <button className="download-button">
          {/* <img src={Icon} alt="Download Icon" /> */}
          {downloadLabel}
        </button>
      </div>
      <div className="p-4 md:p-16 flex flex-col md:flex-row gap-6 w-full align-middle justify-center">
        <div className="w-full md:w-3/5 flex align-middle justify-center">
          {/* <div>
            <h1 className="font-quicksand text-7xl py-8">{title}</h1>
          </div> */}
          <DescriptionBox description={description}></DescriptionBox>
          {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}

          {/* <div dangerouslySetInnerHTML={{ __html: footer }} /> */}
          {/* <SocialMedia /> */}
        </div>
        {/* <div className="flex flex-row pt-10 w-full md:w-2/6 justify-end order-first md:order-last">
          {mainImage && mainImage.asset && (
            <img
              className="w-48 h-60"
              src={imageUrlFor(buildImageObj(mainImage)).url()}
              alt={mainImage.alt}
            />
          )}
        </div> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
