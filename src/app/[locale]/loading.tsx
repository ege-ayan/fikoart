import { PageLoader } from "@/components/page-loader";

export default function Loading() {
  return (
    <div className="flex min-h-[calc(100dvh-73px)] items-center justify-center">
      <PageLoader />
    </div>
  );
}
