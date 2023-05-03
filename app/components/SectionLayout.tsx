import SectionHeader from "./SectionHeader";

export default function Layout({ children, title = "", description = "", metadata }: any) {
    return (
        <div>
            <SectionHeader props={{ title, description, metadata }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                {children}
            </div>
        </div>
    )
}