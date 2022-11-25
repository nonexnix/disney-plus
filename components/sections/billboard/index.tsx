import { use } from "react";
import api from "../../../library/api";
import type { Media } from "../../../types";
import Backdrop from "./backdrop";
import Video from "./video";

type Props = {
  media: Media;
};

const Billboard = ({ media }: Props) => {
  const video = use(api.get.media.video({ type: "movie", id: media.id }))!;

  return (
    <section className="sticky -z-10 aspect-video max-h-screen w-full overflow-hidden tablet:top-0">
      {video ? (
        <Video src={`https://www.youtube.com/embed/${video.key!}`} />
      ) : null}
      <Backdrop
        src={media.image.backdrop!}
        isAlwaysDisplayed={video ? true : false}
      />
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background-dark to-transparent tablet:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Billboard;
