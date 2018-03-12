<template>
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">open1999</a>
          <div class="navbar-form navbar-left">
            <div class="form-group">
              <label for="searchRegion">搜尋地區：</label>
              <select id="searchRegion" class="form-control" v-model="searchRegion">
                <option value='all'>全部</option>
                <option v-for="option in regionOption" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                v-model="searchKeyword"
                @keyup.enter="handleWorkSearch">
              <div class="input-group-btn">
                <button class="btn btn-default" @click="handleWorkSearch">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link hidden-xs-down" target="_blank" href="http://data.kcg.gov.tw/dataset/open1999">資料出處：data.kcg.gov.tw</a>
          </li>
        </ul>
      </div>
    </nav>

    <hr>
  <!-- if -->
      <div v-if="opendate.length===0" class="alert alert-info" role="alert">
        很抱歉！找不要您到的資訊。
      </div>
  <!-- else -->
      <div v-else>
        <div class="alert alert-success" role="alert">
          總共查到：{{ opendate.length }} 筆資料。
        </div>
        <!-- card -->
        <div class="row">
          <div class="col-md-4 col-sm-6" v-for="item in opendate">
            <div class="thumbnail">
              <span class="label label-warning">{{ item.ZipName_ }}</span>
              <span class="label label-ligth-pink">{{ item.InformDesc_ }}</span>
              <span class="label label-info">{{ item.UnitName_ }}</span>
              <div class="caption">
                <h3>
                  <a :href="getGoogleMap( item.address_ )" target="_blank">{{ item.address_ }}</a>
                </h3>
                <p>{{ item.BeforeDesc_ }}</p>
                <small class="text-muted">反應日期：{{ item.Cre_Date_ }}</small>
              </div>
          </div>
        </div>
      </div>
    </div>
  <!-- else end -->

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      searchRegion: 'all',
      searchKeyword: '',
    }
  },
  created () {
    this.$store.dispatch('open1999');
  },
  computed: mapGetters({
    opendate: 'getOpen1999',
    regionOption: 'getRegionOption'
  }),
  methods: {
    ...mapActions([
    ]),
    getGoogleMap(address) {
      return `https://www.google.com/maps/place/${address}`;
    },
    handleWorkSearch () {
      this.$store.dispatch('opendataSearchKeyword', this.searchKeyword);
    },
  },
  watch: {
    searchRegion (val) {
      // console.log(searchRegion);
      this.$store.dispatch('opendataSearchRegion', val);
    }
  },
};
</script>

<style>
  .thumbnail {
    height: 180px;
  }
  .thumbnail h3 {
    margin-top: 7px;
  }
  .label-ligth-pink {
    background-color: #f68a8a;
  }
</style>
