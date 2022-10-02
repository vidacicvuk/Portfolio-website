import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>{
        return (
        <BlogCard key={project.id}>
        <HoverVideoPlayer
      videoSrc={project.video}
      pausedOverlay={
        <img
          src={project.image}
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
          <TitleContent>
            <HeaderThree title>
            {project.title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {project.description}
          </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {project.visit != '' && (<ExternalLinks href={project.visit}>Visit Page</ExternalLinks>)}
            <ExternalLinks href={project.source}>Source Code</ExternalLinks>
            <ExternalLinks href={project.video_demo}>Demo Video</ExternalLinks>
          </UtilityList>
        </BlogCard>
      )})}
    </GridContainer>
  </Section>
);

export default Projects;