export default {
    name: 'locationSoiree',
    title: 'Location: Robe de soiree',
    type: 'document',
    fields:[
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of:[{type: 'image' }],
            option:{
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type: 'slug',
            option:{
                source: 'name',
                maxLength:90,
            }
        },
        {
            name:'price',
            title:'Price',
            type: 'number',
        },
    ]
}