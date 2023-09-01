'use client'

import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud'

interface TagsCloudProps {
  tags: string[]
}

const TagsCloud = ({ tags }: TagsCloudProps) => (
  <TagCloud
    className="font-semibold text-accent-foreground"
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
      radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
      maxSpeed: 'normal'
    })}
  >
    {tags}
  </TagCloud>
)

export default TagsCloud
