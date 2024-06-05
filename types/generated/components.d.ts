import type { Schema, Attribute } from '@strapi/strapi';

export interface CardWDescCardWDesc extends Schema.Component {
  collectionName: 'components_card_w_desc_card_w_descs';
  info: {
    displayName: 'card_w_desc';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    desc: Attribute.RichText;
  };
}

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images'>;
  };
}

export interface FocusCardFocusCard extends Schema.Component {
  collectionName: 'components_focus_card_focus_cards';
  info: {
    displayName: 'Focus Card';
    icon: 'command';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    desc: Attribute.RichText;
    link: Attribute.Component<'link.link'>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card-w-desc.card-w-desc': CardWDescCardWDesc;
      'card.card': CardCard;
      'focus-card.focus-card': FocusCardFocusCard;
      'link.link': LinkLink;
    }
  }
}
