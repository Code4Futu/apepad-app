import Title from "@/components/common/Title";
import PreviewProject from "@/components/preview-project/PreviewProject";
import PreviewProjectMobile from "@/components/preview-project/PreviewProjectMobile";
import { launchpadListMockup } from "@/constants/launchpad";
import { useRouter } from "next/router";

const Main: React.FC = (props) => {
  const router = useRouter();
  const slug = router.query.slug;
  const item = launchpadListMockup.find((item) => item.address === slug);

  if (!item) return <>Can not find fairlaunch item</>;

  return (
    <div className="fadein w-full mx-auto text-sm my-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <Title title="Fairlaunch Detail" />
      </div>
      <div className="flex md:hidden lg:flex xl:hidden relative flex flex-col gap-4 shrink-0 self-stretch">
        <PreviewProjectMobile item={item} />
      </div>
      <div className="hidden md:flex lg:hidden xl:flex relative items-start gap-2">
        <PreviewProject item={item} />
      </div>
    </div>
  );
};

export default Main;
