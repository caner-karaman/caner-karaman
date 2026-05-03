import ProblemViewClient from "./ProblemViewClient";

export default async function ProblemViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <ProblemViewClient slug={slug} title={title} />;
}
