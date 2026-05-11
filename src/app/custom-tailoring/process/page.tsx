import { CustomMeasurements } from '@/components/sections/CustomMeasurements';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Tailoring Process & Guide | MFKhan International',
  description: 'Explore our standard benchmarks and precise measurement guidelines for custom menswear tailoring at MFKhan International.',
};

export default function ProcessGuidePage() {
  return (
    <div className="bg-[#0a0a09] min-h-screen">
      {/* Padding to account for the fixed header, then render the measurements block */}
      <div className="pt-24 md:pt-32 pb-32">
        <CustomMeasurements />
      </div>
    </div>
  );
}
