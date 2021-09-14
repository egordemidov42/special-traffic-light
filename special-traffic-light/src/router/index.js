import Vue from 'vue';
import VueRouter from 'vue-router';
import cfg from '@/config.js';
import TrafficLight from '@/components/TrafficLight';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/2'
    },
    {
      path: '*',
      component: NotFound
    },
    {
      name: 'Red signal',
      path: cfg.red.path,
      props: {
        lightNumber: cfg.red.id,
        startTime: cfg.red.time
      },
      component: TrafficLight,
    },
    {
      name: 'Yellow signal',
      path: cfg.yellow.path,
      props: {
        lightNumber: cfg.yellow.id,
        startTime: cfg.yellow.time
      },
      component: TrafficLight
    },
    {
      name: 'Green signal',
      path: cfg.green.path,
      props: {
        lightNumber: cfg.green.id,
        startTime: cfg.green.time
      },
      component: TrafficLight
    }
  ]
});
