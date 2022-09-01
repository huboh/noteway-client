import { FC } from "react";

// components
import View from '../../components/View';
import Protected from "../../components/Protected";

const OnBoarding: FC = () => {
  return (
    <Protected>
      <View className="onboarding" children="onboarding" />
    </Protected>
  );
};

export {
  OnBoarding as default
};