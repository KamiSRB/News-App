/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';
import { DISABLED_STORYBOOK_CONTROL } from '../../constants';

const childNode = (
  <div style={{ padding: '20px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet bibendum erat vel
    scelerisque. Nam eget ultricies augue. In hac habitasse platea dictumst. Pellentesque pharetra
    tortor in lorem varius sollicitudin. Aenean faucibus elit nec nulla posuere vulputate. Phasellus
    posuere urna id imperdiet aliquet. Sed vel lacinia tortor. Fusce faucibus nisi vel tincidunt
    vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
    egestas. Nam purus velit, pellentesque nec bibendum eu, fringilla id lorem. Integer faucibus
    pulvinar sodales. Aenean sit amet diam feugiat, pharetra risus ut, venenatis mauris. Sed eros
    neque, molestie quis scelerisque non, egestas eget leo. Cras rutrum placerat velit sed semper.
    Maecenas auctor ipsum sed metus eleifend pulvinar. In suscipit eleifend metus, at venenatis
    ligula convallis sed. Duis sed ultrices nunc. Praesent fermentum eget sem nec eleifend. Donec
    sem nunc, eleifend quis fringilla quis, accumsan in augue. Nullam sed tellus rutrum, venenatis
    nunc in, vestibulum magna. Integer accumsan lacus non fringilla accumsan. Fusce condimentum
    massa ac metus congue cursus. Maecenas condimentum justo sit amet ante blandit, nec dictum felis
    hendrerit. Sed bibendum bibendum arcu, a interdum dolor congue ut. Integer non porta magna. Cras
    nec diam nec orci condimentum dapibus in quis eros. Maecenas tincidunt dapibus tellus, vel
    vulputate nisl finibus id. Suspendisse urna mauris, consequat nec suscipit ut, molestie vehicula
    augue. Phasellus sagittis velit et magna elementum, ut pharetra massa rhoncus. Donec eros justo,
    fringilla sit amet tristique eget, placerat eget nulla. Nam et sollicitudin nulla, et congue
    odio. Cras maximus, erat eu gravida hendrerit, mi felis sodales lectus, iaculis gravida diam
    sapien id dui. Aenean nibh quam, convallis a venenatis nec, porttitor sit amet justo. Phasellus
    sodales tincidunt ante id lobortis. Suspendisse sit amet tellus vel lacus suscipit ultricies ac
    consectetur magna. Cras turpis neque, egestas id hendrerit aliquam, malesuada quis lorem. Donec
    felis justo, ultrices ac condimentum at, consequat in risus. Fusce porta nisl vitae augue
    pulvinar, id auctor nisi egestas. Integer viverra nibh sollicitudin neque placerat, id vulputate
    odio viverra. Sed volutpat justo tellus, in efficitur felis euismod ac. Curabitur pretium
    ultricies sodales. Proin leo nisi, commodo imperdiet volutpat a, tempus posuere enim. Vestibulum
    vitae egestas enim. Fusce tincidunt, metus nec pulvinar euismod, mauris metus vestibulum ex, non
    iaculis neque mauris eget libero. Ut fermentum posuere lectus, sed vulputate nunc tempus non.
    Sed luctus ipsum a enim semper dignissim. Donec ut nibh ipsum. Aliquam faucibus venenatis quam
    eu scelerisque. Nam sem nisi, tristique a lorem vel, pulvinar luctus nisi. Morbi et sem vitae
    ipsum feugiat pellentesque. Vivamus ultricies libero massa, in laoreet justo dapibus ac.
    Maecenas nec urna metus. Donec in lacus eros. Nam ipsum leo, feugiat non accumsan sollicitudin,
    molestie pellentesque ligula.
  </div>
);

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: {
    title: 'Category 1',
  },
  argTypes: {
    children: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta<AccordionProps>;

const Template: Story<AccordionProps> = (props) => <Accordion {...props}>{childNode}</Accordion>;

export const WithoutRoute = Template.bind({});

export const WithRoute = Template.bind({});
WithRoute.args = {
  titleLinkRoute: '/category-1',
};
