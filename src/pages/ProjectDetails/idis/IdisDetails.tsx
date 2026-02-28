import React, { useRef } from 'react';
import { idisConfig } from './idisConfig';
import { IdisOverview, IdisTechStack, IdisFeatures, IdisRoadmap } from './sections';
import DetailedTemplate from '../templates/DetailedTemplate';

interface IdisDetailsProps {
  onBackClick: () => void;
}

const IdisDetails: React.FC<IdisDetailsProps> = ({ onBackClick }) => {
  // Section Refs
  const overviewRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'overview', label: 'Overview', ref: overviewRef },
    { id: 'techstack', label: 'Tech Stack', ref: techStackRef },
    { id: 'features', label: 'Features', ref: featuresRef },
    { id: 'roadmap', label: 'Roadmap', ref: roadmapRef },
  ];

  const content = (
    <>
      <IdisOverview project={idisConfig} forwardRef={overviewRef} />
      <IdisTechStack forwardRef={techStackRef} />
      <IdisFeatures forwardRef={featuresRef} />
      <IdisRoadmap forwardRef={roadmapRef} />
    </>
  );

  return (
    <DetailedTemplate
      project={idisConfig}
      onBackClick={onBackClick}
      sections={sections}
      content={content}
    />
  );
};

export default IdisDetails;
