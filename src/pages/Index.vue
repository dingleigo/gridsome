<template>
  <Layout>
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="`/post/${edge.node.id}`">
              <h2 class="post-title">{{edge.node.title}}</h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">dinglei</a>
              on {{edge.node.created_at}}
            </p>
            <p>
              <a v-for="tag in edge.node.tags" :key="tag.id">{{tag.title}} &nbsp&nbsp</a>
            </p>
            <hr />
          </div>
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>-->
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>

    <hr />
  </Layout>
</template>

<page-query>
query ($page: Int){
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        tags {
          id
          title
        },
        created_at
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
