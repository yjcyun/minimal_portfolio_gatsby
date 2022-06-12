import React from "react";
import Layout from "@components/layout/layout";
import Table from "@components/page/archive/table";
import PageTitle from "@components/ui/page-title";
import { graphql, PageProps } from "gatsby";

export type GetArchivedProjectsMdxQuery = {
  projectsMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        liveLink: string;
        sourceLink?: string | null;
        tags?: Array<string> | null;
        title: string;
        date: string;
      };
    }>;
  };
};

const Archive = ({ data }: PageProps<GetArchivedProjectsMdxQuery>) => {
  const {
    projectsMdx: { nodes: projects },
  } = data;

  return (
    <Layout>
      <PageTitle title="Archived Projects" />
      <Table data={projects} />
    </Layout>
  );
};

export const query = graphql`
  query GetArchivedProjectsMdx {
    projectsMdx: allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          liveLink
          sourceLink
          tags
          title
          date(formatString: "MMM YYYY")
        }
        id
      }
    }
  }
`;

export default Archive;