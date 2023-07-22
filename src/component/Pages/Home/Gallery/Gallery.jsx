
const photos = [
    {
        id: 1,
        src: 'https://cf.ltkcdn.net/family/images/orig/339113-2121x1414-college-graduates-858465270.jpg',
        alt: 'Photo 1',
    },
    {
        id: 2,
        src: 'https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-814242f/wp-content/uploads/2022/12/graduation-pictures-karolina-grabowska.jpeg',
        alt: 'Photo 2',
    },
    {
        id: 3,
        src: 'https://i0.wp.com/joinhandshake.com/wp-content/uploads/2020/04/accomplishment-ceremony-education-graduation-267885.jpg?fit=3000%2C2000&ssl=1',
        alt: 'Photo 3',
    },
    {
        id: 4,
        src: 'https://www.thoughtco.com/thmb/jGOADb2eKSh5tKLAiY6RkakBIR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/476804009-56a18f2b5f9b58b7d0c0a95f.jpg',
        alt: 'Photo 1',
    },
    {
        id: 5,
        src: 'https://www.anokatech.edu/media/tlylip5c/0103-hero-graduation-627x400.jpg',
        alt: 'Photo 2',
    },
    {
        id: 6,
        src: 'https://imengine.public.prod.cdr.navigacloud.com/?uuid=89E1CBA2-C815-426A-AFDE-846B54FAD11A&function=cover&type=preview&source=false&width=1050&height=550',
        alt: 'Photo 3',
    },
    {
        id: 7,
        src: 'https://now.uiowa.edu/sites/now.uiowa.edu/files/styles/640_wide/public/photo-galleries/2017_05_13-CLAS%20College%20Commencement-jatorner-0399.jpg?itok=1M-VyPGo',
        alt: 'Photo 1',
    },
    {
        id: 8,
        src: 'https://now.uiowa.edu/sites/now.uiowa.edu/files/photo-galleries/2019_12_21-CLAS%20Dec%202019%20Commencement-jatorner-0618.jpg',
        alt: 'Photo 2',
    }

    // Add more photos as needed
];
const Gallery = () => {
    return (
        <div className="  m-auto p-20 bg-base-100">
            <div>
                <h1 className="text-5xl font-bold text-center pb-10">Gallery</h1>
            </div>

            <div className="container bg-white rounded mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <div key={photo.id} className="p-2">
                            <img src={photo.src} alt={photo.alt} className="w-full h-auto rounded-md" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Gallery;