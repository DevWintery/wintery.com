import { Typo } from "@solved-ac/ui-react";
import { IconCode } from "@tabler/icons-react";
import { BaekjoonResponse } from "../../../dynamicProfile/loaders/baekjoon";
import { LinkItem } from "../LinkItem";

const LinkItemBaekjoon = ({
  baekjoon,
}: {
  baekjoon: BaekjoonResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconCode />}
      caption="Baekjoon OJ"
      description={
        baekjoon ? (
          <>
            ntf7595{" "}
            <Typo description tabular>
              (#{baekjoon.rank})
            </Typo>
          </>
        ) : (
          `ntf7595`
        )
      }
      href="https://www.acmicpc.net/user/ntf7595"
      color="#2e9afe"
    />
  );
};

export default LinkItemBaekjoon;
