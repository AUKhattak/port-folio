import React from 'react';
import { Box, Typography } from '@mui/material';
import { FeaturesList } from '../../../../shared/components/sections';

interface ClotheFeaturesProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

const ClotheFeatures: React.FC<ClotheFeaturesProps> = ({ forwardRef }) => {
  return (
    <>
      {/* Divider */}
      <Box
        sx={{
          borderTop: '1px solid #E2E8F0',
          my: 8,
        }}
      />

      {/* Features Section */}
      <Box ref={forwardRef} id="features" sx={{ mb: 12 }}>
        <Typography
          variant="h4"
          sx={{
            color: '#0F172A',
            mb: 4,
            fontWeight: 700,
          }}
        >
          Key Features
        </Typography>
        <FeaturesList
          categories={[
            {
              category: 'Storefront',
              icon: '🛍️',
              features: [
                'Product catalog with advanced search',
                'Image gallery with zoom functionality',
                'Responsive and mobile-optimized design',
              ],
            },
            {
              category: 'Cart & Checkout',
              icon: '🛒',
              features: [
                'Persistent shopping cart',
                'Stripe payment integration',
                'Order summary and confirmation',
              ],
            },
            {
              category: 'Authentication & Authorization',
              icon: '🔐',
              features: [
                'Dual JWT authentication system',
                'Session management with refresh tokens',
                'Role-based access control (RBAC)',
              ],
            },
            {
              category: 'Admin & Moderator',
              icon: '👨‍💼',
              features: [
                'Admin dashboard',
                'Product management interface',
                'Order processing and fulfillment',
              ],
            },
            {
              category: 'Fit Analysis & Sizing',
              icon: '📏',
              features: [
                'Virtual try-on technology',
                'Size recommendation engine',
                'Garment measurement database',
              ],
            },
            {
              category: 'Performance & SEO',
              icon: '⚡',
              features: [
                'Next.js static generation for performance',
                'SEO metadata and Open Graph tags',
                'API route optimization',
              ],
            },
          ]}
        />
      </Box>
    </>
  );
};

export default ClotheFeatures;
