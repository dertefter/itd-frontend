import { A as A_1, a6, a1, a7, a8, a9, aa, K as K_1, h as h_1, q as q_1, ab, u as u_1, $ as $_1, a5, ac, ad } from "./index-B4ySybtH.js";
import { I as I_1 } from "./IconChevronLeft-5EaueS2w.js";
const postPage = "Mfqs";
const pageHeader = "Bxpw";
const pageTitle = "VUyV";
const postSection = "M8Vz";
const backButton = "rW21";
const post = "z1Ka";
const commentsSection = "pgSz";
const fixedInputWrapper = "eUDo";
const notFound = "eaDa";
const n = {
    postPage,
    pageHeader,
    pageTitle,
    postSection,
    backButton,
    post,
    commentsSection,
    fixedInputWrapper,
    notFound
};
export function PostPage({ postId, comment }) {
    const h = A_1(null);
    const a = a6(()=>comment || new URLSearchParams(window.location.search).get("comment") || undefined, [
        comment
    ]);
    const { currentPost, currentPostError, fetchPost } = a1(a7((e)=>({
            currentPost: e.currentPost,
            currentPostError: e.currentPostError,
            fetchPost: e.fetchPost
        })));
    const { comments, commentsLoading, commentsLoadingMore, commentsHasMore, clearComments, fetchComments, loadMoreComments, toggleCommentLike, addComment, setHighlightedCommentId } = a8(a7((e)=>({
            comments: e.comments,
            commentsLoading: e.commentsLoading,
            commentsLoadingMore: e.commentsLoadingMore,
            commentsHasMore: e.commentsHasMore,
            clearComments: e.clearComments,
            fetchComments: e.fetchComments,
            loadMoreComments: e.loadMoreComments,
            toggleCommentLike: e.toggleCommentLike,
            addComment: e.addComment,
            setHighlightedCommentId: e.setHighlightedCommentId
        })));
    const source = a9((e)=>e.navigatedInApp) ? "post_page" : "link";
    if (postId && h.current !== postId) {
        h.current = postId;
        clearComments();
    }
    const { commentsSort, setCommentsSort } = aa(a7((e)=>({
            commentsSort: e.commentsSort,
            setCommentsSort: e.setCommentsSort
        })));
    const z = K_1((e)=>e.profile?.id);
    const isWallOwner = currentPost?.wallOwnerId === z;
    h_1(()=>{
        if (!a) {
            window.scrollTo(0, 0);
        }
    }, [
        postId,
        a
    ]);
    h_1(()=>{
        if (!postId) {
            return;
        }
        let e = false;
        await fetchPost(postId), e || await fetchComments(postId);
        return ()=>{
            e = true;
        };
    }, [
        postId,
        fetchPost,
        fetchComments
    ]);
    const p = A_1(null);
    h_1(()=>{
        if (!postId || !a) {
            return;
        }
        const e = `${postId}:${a}`;
        if (p.current !== e) {
            p.current = e;
            setHighlightedCommentId(a);
        }
    }, [
        postId,
        a,
        setHighlightedCommentId
    ]);
    const onClick = ()=>{
        if (window.history.length > 1) {
            window.history.back();
        } else {
            $_1("/");
        }
    };
    const onSortChange = (e)=>{
        setCommentsSort(e);
        if (postId) {
            fetchComments(postId);
        }
    };
    const onLoadMore = ()=>{
        if (postId && commentsHasMore && !commentsLoadingMore) {
            loadMoreComments(postId);
        }
    };
    const onLikeComment = (e)=>{
        toggleCommentLike(e);
    };
    const w = async (e)=>{
        if (postId) {
            await addComment(postId, e);
        }
    };
    const onVoiceSend = q_1(async (e)=>{
        if (postId) {
            try {
                const s = `voice_${Date.now()}.webm`;
                const l = new File([
                    e
                ], s, {
                    type: e.type || "audio/webm"
                });
                const B = await ab.uploadMedia(l);
                await addComment(postId, {
                    text: "",
                    attachments: [
                        {
                            mediaId: B.id
                        }
                    ]
                });
            } catch (s) {
                console.error("Failed to send voice message:", s);
            }
        }
    }, [
        addComment,
        postId
    ]);
    if (currentPostError) {
        return u_1("div", {
            className: n.notFound,
            children: [
                u_1("h2", {
                    children: "Пост не найден"
                }),
                u_1("button", {
                    onClick: ()=>$_1("/"),
                    children: "Вернуться на главную"
                })
            ]
        });
    }
    if (currentPost) {
        return u_1("div", {
            className: n.postPage,
            children: [
                u_1("header", {
                    className: n.pageHeader,
                    children: [
                        u_1("button", {
                            className: n.backButton,
                            onClick,
                            children: u_1(I_1, {
                                size: 24
                            })
                        }),
                        u_1("h1", {
                            className: n.pageTitle,
                            children: "Пост"
                        })
                    ]
                }),
                u_1("div", {
                    className: n.postSection,
                    children: [
                        u_1(a5, {
                            className: n.post,
                            post: currentPost,
                            variant: "modal",
                            source,
                            sourceContext: currentPost.id
                        }),
                        u_1("div", {
                            className: n.commentsSection,
                            "data-comments-section": true,
                            children: u_1(ac, {
                                comments,
                                isLoading: commentsLoading,
                                isLoadingMore: commentsLoadingMore,
                                hasMore: commentsHasMore,
                                sort: commentsSort,
                                onSortChange,
                                onLikeComment,
                                onAddComment: w,
                                onVoiceSend,
                                onLoadMore,
                                isWallOwner,
                                variant: "page",
                                hideInput: true
                            })
                        })
                    ]
                }),
                u_1("div", {
                    className: n.fixedInputWrapper,
                    children: u_1(ad, {
                        onSubmit: (text, spans, attachments)=>w({
                                text,
                                spans,
                                attachments
                            }),
                        onVoiceSend
                    })
                })
            ]
        });
    }
    return null;
}
export { PostPage as default };
