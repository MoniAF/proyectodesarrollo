import {registerBlockType} from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import {useBlockProps} from '@wordpress/block-editor';

registerBlockType('wp-gutenberg/sketchfab', {
    title: 'sketchfab',
    description: 'sketchab block',
    category: 'my-blocks',
    icon: 'smiley',
    attributes: {
        url:{
            type: 'string',
            default: ''
        }
    },
    edit:({attributes, setAttributes}) => {
        const blockProps = useBlockProps();
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                "div",
                blockProps,
                React.createElement(TextControl, {
                    label: "Sketchfab URL",
                    value: attributes.url,
                    onChange: (url) => setAttributes({url})
                }),
                attributes.url && React.createElement("iframe", {
                    title:"Sketchfab",
                    width:"600",
                    height:"450",
                    src:attributes.url + "/embed",
                    allow:"autoplay; fullscreen; vr"
                })
            )
        );
    },
    save: ({ attributes }) => {
        const blockProps = useBlockProps.save();
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                "div",
                blockProps,
                attributes.url && React.createElement("iframe", {
                    title:"Sketchfab",
                    width:"600",
                    height:"450",
                    src:attributes.url + "/embed",
                    allow:"autoplay; fullscreen; vr"
                })
            )
        );
    } 
})