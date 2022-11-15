import { Text, Highlight, List, ListItem, Heading } from "@chakra-ui/react";
import { type Project } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface VideoListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: VideoListProps) => {
  return (
    <>
      {projects.length !== 0 ? (
        <List spacing={3}>
          {projects.map((project) => (
            <ListItem
              key={project.id}
              className="flex gap-x-8 p-4 rounded-lg transition-colors"
            >
              <div className="flex flex-col w-full">
                <Heading as="h3" size="xl">
                  {project.name}
                </Heading>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="max-w-none prose"
                >
                  {project.richText}
                </ReactMarkdown>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Text> Nenhum projeto foi disponibilizado para esse tópico</Text>
          <Text>
            {" "}
            Entre em contato com seu{" "}
            <Highlight
              query="ADMIN"
              styles={{ px: "2", py: "1", rounded: "full", bg: "secondary" }}
            >
              ADMIN
            </Highlight>{" "}
            para adicionar um projeto ou mande uma sugestão
          </Text>
        </div>
      )}
    </>
  );
};

export default ProjectList;
