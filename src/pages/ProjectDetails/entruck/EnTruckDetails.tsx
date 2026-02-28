import React, { useRef } from 'react';
import { entruckConfig } from './entruckConfig';
import { EnTruckOverview, EnTruckTechStack, EnTruckFeatures, EnTruckRoadmap } from './sections';
import DetailedTemplate from '../templates/DetailedTemplate';

interface EnTruckDetailsProps {
  onBackClick: () => void;
}

const EnTruckDetails: React.FC<EnTruckDetailsProps> = ({ onBackClick }) => {
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
      <EnTruckOverview project={entruckConfig} forwardRef={overviewRef} />
      <EnTruckTechStack forwardRef={techStackRef} />
      <EnTruckFeatures forwardRef={featuresRef} />
      <EnTruckRoadmap forwardRef={roadmapRef} />
    </>
  );

  return (
    <DetailedTemplate
      project={entruckConfig}
      onBackClick={onBackClick}
      sections={sections}
      content={content}
    />
  );
};

export default EnTruckDetails;
