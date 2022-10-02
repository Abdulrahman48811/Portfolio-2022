export default {
  name: 'PageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string", 
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },




  ],
}
