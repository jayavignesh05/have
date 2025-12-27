export default function InstagramFeed() {
    return (
        <section className="relative overflow-hidden">
            <div className="text-center py-10">
                <p className="text-xs uppercase text-gray-500 mb-1">Instagram</p>
                <h2 className="text-3xl font-bold font-serif">@vHAVEshop</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 h-64 md:h-80">
                <img alt="Instagram 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=800&auto=format&fit=crop" />
                <img alt="Instagram 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop" />
                <img alt="Instagram 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop" />
                <img alt="Instagram 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534030347209-7147fd2e7506?q=80&w=800&auto=format&fit=crop" />
                <img alt="Instagram 5" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=800&auto=format&fit=crop" />
            </div>
        </section>
    );
}
