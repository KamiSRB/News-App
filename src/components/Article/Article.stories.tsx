/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DISABLED_STORYBOOK_CONTROL, MOCK_ARTICLE_IMAGE } from '../../constants';
import Article, { ArticleProps } from './Article';

export default {
  title: 'Molecules/Article',
  component: Article,
  args: {
    title: 'Article title',
    description: 'Short article description.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies consectetur purus sit amet convallis. Duis vitae placerat diam, nec ullamcorper felis. Nulla tellus nunc, maximus in pulvinar eget, rutrum vel lorem. Nunc ultrices, libero sed aliquam ornare, purus tellus pellentesque purus, non euismod felis lacus ac lacus. Aliquam purus ex, varius vitae dignissim in, vestibulum nec eros. In ac elit purus. Vestibulum gravida mollis nulla, sed bibendum ligula. Fusce lobortis ullamcorper ipsum, a blandit tortor viverra sed. Pellentesque ullamcorper posuere egestas. Integer a molestie turpis.\n\nFusce fringilla massa at condimentum gravida. Suspendisse placerat eros at condimentum imperdiet. Aenean dictum massa eget ligula tempus, ac fermentum sem iaculis. Nunc facilisis nisl eu turpis dignissim aliquam. Sed ac iaculis est, ultricies molestie quam. Nam viverra velit vel magna vehicula pulvinar. Quisque condimentum urna tortor, nec sodales nibh luctus quis. Nullam porttitor non ipsum non posuere. Duis sollicitudin tempor velit vel tincidunt. Ut mollis ipsum sed sapien condimentum maximus. Nullam vitae tempus massa. Quisque in nulla ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean mattis lorem id maximus viverra. Suspendisse imperdiet ligula at mi aliquam pretium.\n\nSed consectetur leo velit, ac viverra quam tempus eget. Duis sed leo in dolor cursus suscipit. Nulla facilisi. Etiam non enim vitae lacus pellentesque tempus vel ac risus. Aliquam sit amet ex convallis, volutpat turpis vitae, mattis ipsum. Vivamus suscipit molestie lectus, non convallis felis faucibus vitae. In nibh sapien, pulvinar at condimentum ut, pellentesque eu lorem. Phasellus at libero ac odio finibus volutpat. Aenean purus mauris, elementum ac urna quis, bibendum ultricies nisi. Integer sollicitudin lacinia lorem, a commodo elit tristique non. Nulla condimentum, nisl vitae viverra blandit, leo nibh tincidunt sapien, vel malesuada eros nisl eget diam. Vestibulum magna nibh, volutpat non neque in, dapibus accumsan tortor. Praesent ultrices dolor tortor, nec laoreet diam blandit non.\n\nPhasellus ac consequat tellus. Aliquam quis placerat nisi. Nullam sit amet tempor lacus. Cras placerat velit lorem, quis eleifend velit molestie in. Morbi imperdiet vitae est at volutpat. Sed leo massa, molestie vel orci nec, dapibus efficitur leo. Phasellus varius sem gravida quam mollis, sit amet consequat nisl mollis. Aenean feugiat, elit at ultricies sollicitudin, massa diam faucibus arcu, ut sagittis sapien turpis vel sem. Fusce euismod diam ut lorem fringilla, eu commodo dolor porta. Phasellus tempus lorem vitae viverra luctus. Donec nibh elit, volutpat ac commodo ut, feugiat non nibh. Mauris tempus viverra metus, non consequat lorem cursus ac. Aenean eget dolor in nisl porttitor facilisis ut a urna.\n\nVestibulum id diam in est efficitur cursus. Aenean massa turpis, sagittis sit amet mi quis, faucibus finibus ex. Integer ex dolor, blandit non mauris et, imperdiet sollicitudin massa. Maecenas interdum consequat magna eget efficitur. In et augue cursus, tempus elit faucibus, luctus nunc. Curabitur est ex, convallis sed turpis eu, consequat consectetur magna. Proin mauris ipsum, bibendum quis ipsum id, placerat bibendum purus. Morbi tristique nulla eget tellus rutrum dapibus. Suspendisse vestibulum nisl nulla, ut fringilla nunc lobortis vel. Phasellus euismod odio eget sem dignissim rhoncus ac ac elit.',
  },
  argTypes: {
    imageSrc: DISABLED_STORYBOOK_CONTROL,
    backLinkRoute: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta<ArticleProps>;

const Template: Story<ArticleProps> = (props) => <Article {...props} />;

export const SimpleArticle = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  imageSrc: MOCK_ARTICLE_IMAGE,
};

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  imageSrc: MOCK_ARTICLE_IMAGE,
  backLinkRoute: '/route1',
};
