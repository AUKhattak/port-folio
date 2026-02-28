import React, { useRef } from 'react';
import { clotheConfig } from './clotheConfig';
import {
  ClotheOverview,
  ClotheTechStack,
  ClotheFeatures,
  ClotheArchitecture,
  ClotheDeployment,
  ClotheRoadmap,
} from './sections';
import DetailedTemplate from '../templates/DetailedTemplate';

interface ClotheDetailsProps {
  onBackClick: () => void;
}

const ClotheDetails: React.FC<ClotheDetailsProps> = ({ onBackClick }) => {
  // Section Refs
  const overviewRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const deploymentRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'overview', label: 'Overview', ref: overviewRef },
    { id: 'techstack', label: 'Tech Stack', ref: techStackRef },
    { id: 'features', label: 'Features', ref: featuresRef },
    { id: 'highlights', label: 'Architecture', ref: highlightsRef },
    { id: 'deployment', label: 'Deployment', ref: deploymentRef },
    { id: 'roadmap', label: 'Roadmap', ref: roadmapRef },
  ];

  const content = (
    <>
      <ClotheOverview project={clotheConfig} forwardRef={overviewRef} />
      <ClotheTechStack forwardRef={techStackRef} />
      <ClotheFeatures forwardRef={featuresRef} />
      <ClotheArchitecture forwardRef={highlightsRef} />
      <ClotheDeployment forwardRef={deploymentRef} />
      <ClotheRoadmap forwardRef={roadmapRef} />
    </>
  );

  return (
    <DetailedTemplate
      project={clotheConfig}
      onBackClick={onBackClick}
      sections={sections}
      content={content}
    />
  );
};

export default ClotheDetails;
