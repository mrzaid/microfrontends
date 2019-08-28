<template>
  <div>
    <table class="highlight" :v-if="mounted && _columns">
      <thead>
        <tr>
          <th
            :key="key"
            v-for="key in _columns"
            @click="sortBy(key)"
            :class="{ active: sortKey == key }"
          >
            {{ key | capitalize }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(entry, i) in filteredData">
          <td :key="key" v-for="key in _columns" @click="clickHandler(entry)">{{entry[key]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  // replace: true,
  props: {
    data: String,
    columns: String,
    filterKey: String
  },
  data: function() {
    let sortOrders = {};
    (JSON.parse(this.columns) || []).forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      sortOrders: sortOrders,
      mounted: false,
      _columns: JSON.parse(this.columns)

    };
  },
  computed: {
    filteredData: function() {
      let sortKey = this.sortKey;
      let filterKey = this.filterKey && this.filterKey.toLowerCase();
      let order = this.sortOrders[sortKey] || 1;
      let data = JSON.parse(this.data);
      if (filterKey) {
        data = data.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  methods: {
    clickHandler(entry) {
      this.$emit('tr-clicked', entry);
    },
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  },
  created() {
    this._columns = JSON.parse(this.columns);
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true
    }, 500)
  }
};
</script>

<style>
/* table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
} */

/* th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
} */

/* td {
  background-color: #f9f9f9;
} */

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #0085e4;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #0085e4;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #0085e4;
}
</style>