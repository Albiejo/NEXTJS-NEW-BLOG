  import React from "react";
  import fs from 'fs'
  import matter from "gray-matter";
  import { notFound } from "next/navigation";
  import rehypeDocument from 'rehype-document'
  import rehypeFormat from 'rehype-format'
  import rehypeStringify from 'rehype-stringify'
  import remarkParse from 'remark-parse'
  import remarkRehype from 'remark-rehype'
  import {unified} from 'unified'
  import rehypePrettyCode from "rehype-pretty-code";
  import { transformerCopyButton } from '@rehype-pretty/transformers'
  import OnthisPage from "@/components/OnthisPage";
  import rehypeAutolinkHeadings from "rehype-autolink-headings";
  import rehypeSlug from "rehype-slug";



  const page = async ({ params }) => {
    const { slug } = await params;

    const filepath = `content/${slug}.md`
    if(!fs.existsSync(filepath)){
      notFound()
      return
    }
    const fileContent  = fs.readFileSync(filepath , "utf-8")
    const {content , data} = matter(fileContent)

    const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: '👋🌍'})
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode,{
      theme:"github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })


    const htmlContent = (await processor.process(content)).toString()



    return (
      <div className="flex flex-col ml-52 min-h-screen">
          <div className="max-w-3x1 w-full">
            <h1 className="text-3x1 font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
              {data.description}
            </p>
            <div className="flex gap-2">
              <p className="text-sm  mb-4 italic"> by {data.author}</p>
              <p className="text-sm  mb-4">{data.date}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="prose dark:prose-invert"
            ></div>
            <OnthisPage htmlContent={htmlContent}/>
          </div>
      </div>
    );
  };

  export default page;
