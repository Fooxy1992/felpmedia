import CRMApp from '../../components/CRMApp';

export const metadata = {
  title: 'CRM — Lead Management',
};

export default function CRMPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Command Center</h1>
        </div>

        <CRMApp />
      </div>
    </div>
  );
}
